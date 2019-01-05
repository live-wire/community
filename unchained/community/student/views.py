from django.shortcuts import render

from rest_framework import generics
from rest_framework import mixins

from django.contrib.auth.models import User
from rest_framework import permissions

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import renderers
from rest_framework import viewsets
# Create your views here.

from rest_framework.decorators import action
from rest_framework.response import Response
from community.csrfsession import CsrfExemptSessionAuthentication
from .serializers import StudentSerializer, StudentListSerializer
from .models import Student
from rest_framework.exceptions import PermissionDenied
from community.permissions import isInstitutionAdmin, belongsToInstitution, getUserInstitution, canUpdateProfile
from community.filters import applyUserFilters
from community.mappings import generateKeys

class StudentViewSet(viewsets.ModelViewSet):
	"""
	This viewset automatically provides `list`, `create`, `retrieve`,
	`update` and `destroy` actions.

	Additionally we also provide an extra `highlight` action.
	"""
	queryset = Student.objects.all()
	serializer_class = StudentSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
	authentication_classes = (CsrfExemptSessionAuthentication, )

	def list(self, request, *args, **kwargs):
		self.serializer_class = StudentListSerializer
		if not belongsToInstitution(request, getUserInstitution(request)):
			raise PermissionDenied(detail='User does not belong to the institution', code=None)
		if request.user.is_superuser:
			self.queryset = applyUserFilters(request, Student)
		else:
			self.queryset = applyUserFilters(request, Student, institution=getUserInstitution(request))
			# Student.objects.filter(institution=getUserInstitution(request))
		response = super(StudentViewSet, self).list(request, *args, **kwargs)
		response = generateKeys(response, self.serializer_class)
		return response

	def get_serializer_context(self):
		context = super(StudentViewSet, self).get_serializer_context()
		context.update({
			"exclude_email_list": ['test@test.com', 'test1@test.com']
			# extra data
		})
		return context
	def create(self, request, *args, **kwargs):
		if not isInstitutionAdmin(request, getUserInstitution(request)):
			raise PermissionDenied(detail='User is not an admin_user', code=None)
		return super(StudentViewSet, self).create(request, *args, **kwargs)

	def retrieve(self, request, *args, **kwargs):
		if not belongsToInstitution(request, self.get_object().institution):
			raise PermissionDenied(detail='User does not belong to the institution', code=None)
		return super(StudentViewSet, self).retrieve(request, *args, **kwargs)

	def update(self, request, *args, **kwargs):
		if not canUpdateProfile(request, self.get_object().institution, self.get_object()):
			raise PermissionDenied(detail='User can not update other profiles', code=None)
		return super(StudentViewSet, self).update(request, *args, **kwargs)

	def destroy(self, request, *args, **kwargs):
		if not isInstitutionAdmin(request, self.get_object().institution):
			raise PermissionDenied(detail='User is not an admin_user', code=None)
		return super(StudentViewSet, self).destroy(request, *args, **kwargs)
