from rest_framework import permissions
import pickle
from django.core.cache import cache
from functools import reduce
from django.contrib.auth.models import User, AnonymousUser
from rest_framework.authtoken.models import Token
from rest_framework import authentication, exceptions

def get_user(request):
	auth = authentication.get_authorization_header(request)
	if auth is not None:
		auth = auth.decode("utf-8")
		auth = auth.split(" ")
	if auth is None or 'Token' not in auth:
		return None
	if len(auth) == 1:
		msg = _('Invalid token header. No credentials provided.')
		raise exceptions.AuthenticationFailed(msg)
	elif len(auth) > 2:
		msg = _('Invalid token header. Credentials string should not contain spaces.')
		raise exceptions.AuthenticationFailed(msg)
	try:
		token = Token.objects.get(key=str(auth[1]))
		user = token.user
		return user
	except Token.DoesNotExist:
		raise exceptions.AuthenticationFailed('Token Invalid')
	return None


def localcache(f):
	def wrapper(*args, **kwargs):
		# Making sure that the user is not just some AnonymousUser
		if type(args[0].user) is AnonymousUser:
			args[0].user = get_user(args[0])
		# First argument will always be request
		key = ''
		key += f.__name__ + '-' # function_name
		key += str(args[0].user.id) + '-' # user_id
		if len(args)>1:
			for item in args[1:]:
				if item:
					key += str(item.id) + '-'
		def keyNotPresent():
			print("caching", key)
			return f(*args, **kwargs)
		ret = cache.get_or_set(key, keyNotPresent)
		return ret
	return wrapper

@localcache
def getUserInstitution(request):
	if (request.user.is_superuser):
		return None
	else:
		if hasattr(request.user, 'student'):
			return request.user.student.institution
		if hasattr(request.user, 'teacher'):
			return request.user.teacher.institution
		if hasattr(request.user, 'administrator'):
			return request.user.administrator.institution


def getUserType(request):
	if (request.user.is_superuser):
		return 'super'
	else:
		if hasattr(request.user, 'student'):
			return 'student'
		if hasattr(request.user, 'teacher'):
			return 'teacher'
		if hasattr(request.user, 'administrator'):
			return 'administrator'

@localcache
def getUserCourses(request):
	if (request.user.is_superuser):
		return []
	else:
		if hasattr(request.user, 'student'):
			return request.user.student.courses
		if hasattr(request.user, 'teacher'):
			return request.user.teacher.courses
		if hasattr(request.user, 'administrator'):
			return getUserInstitution(request).courses

@localcache
def belongsToInstitution(request, institution):
	if (request.user.is_superuser or
	institution.students.filter(user_id=request.user.id).exists() or 
	institution.teachers.filter(user_id=request.user.id).exists() or 
	institution.administrators.filter(user_id=request.user.id).exists()):
		return True
	print(request.user, "doesn't belong to ", institution)
	return False

@localcache
def isInstitutionAdmin(request, institution):
	if (request.user.is_superuser or 
	institution.administrators.filter(user_id=request.user.id).exists()):
		return True
	return False

@localcache
def canUpdateCourse(request, institution, course):
	if (request.user.is_superuser or 
	institution.administrators.filter(user_id=request.user.id).exists() or
	course.teacher_set.filter(user_id=request.user.id).exists()):
		return True
	return False

@localcache
def canRetrieveCourse(request, institution, course):
	if (request.user.is_superuser or 
	institution.administrators.filter(user_id=request.user.id).exists() or
	institution.teachers.filter(user_id=request.user.id).exists() or
	course.student_set.filter(user_id=request.user.id).exists()):
		return True
	return False

@localcache
def canUpdateProfile(request, institution, user_obj):
	if (request.user.is_superuser or 
	institution.administrators.filter(user_id=request.user.id).exists() or
	request.user.id == user_obj.user.id):
		return True
	return False
