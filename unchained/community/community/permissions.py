from rest_framework import permissions
import pickle

def belongsToInstitution(request, institution):
	if (request.user.is_superuser or 
	institution.students.filter(user_id=request.user.id).exists() or 
	institution.teachers.filter(user_id=request.user.id).exists() or 
	institution.admin_users.filter(user_id=request.user.id).exists()):
		return True
	print(request.user, "doesn't belong to ", institution)
	return False

def isInstitutionAdmin(request, institution):
	if (request.user.is_superuser or 
	institution.admin_users.filter(user_id=request.user.id).exists()):
		return True
	return False

def canUpdateCourse(request, institution, course):
	if (request.user.is_superuser or 
	institution.admin_users.filter(user_id=request.user.id).exists()):
		return True
	return False