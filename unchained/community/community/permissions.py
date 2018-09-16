from rest_framework import permissions
import pickle

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

def belongsToInstitution(request, institution):
	if (request.user.is_superuser or 
	institution.students.filter(user_id=request.user.id).exists() or 
	institution.teachers.filter(user_id=request.user.id).exists() or 
	institution.administrators.filter(user_id=request.user.id).exists()):
		return True
	print(request.user, "doesn't belong to ", institution)
	return False

def isInstitutionAdmin(request, institution):
	if (request.user.is_superuser or 
	institution.administrators.filter(user_id=request.user.id).exists()):
		return True
	return False


def canUpdateCourse(request, institution, course):
	if (request.user.is_superuser or 
	institution.administrators.filter(user_id=request.user.id).exists() or
	course.teacher_set.filter(user_id=request.user.id).exists()):
		return True
	return False

def canRetrieveCourse(request, institution, course):
	if (request.user.is_superuser or 
	institution.administrators.filter(user_id=request.user.id).exists() or
	course.teacher_set.filter(user_id=request.user.id).exists() or
	course.student_set.filter(user_id=request.user.id).exists()):
		return True
	return False

def canUpdateProfile(request, institution, user_obj):
	if (request.user.is_superuser or 
	institution.administrators.filter(user_id=request.user.id).exists() or
	request.user.id == user_obj.user.id):
		return True
	return False
