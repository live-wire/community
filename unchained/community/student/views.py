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
from .serializers import StudentSerializer
from .models import Student
from rest_framework.exceptions import PermissionDenied
from community.permissions import isInstitutionAdmin, belongsToInstitution, getUserInstitution, canUpdateProfile

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
		if not belongsToInstitution(request, getUserInstitution(request)):
			raise PermissionDenied(detail='User does not belong to the institution', code=None)
		if request.user.is_superuser:
			self.queryset = Student.objects.all()
		else:
			self.queryset = Student.objects.filter(institution=getUserInstitution(request))
		return super(StudentViewSet, self).list(request, *args, **kwargs)

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
