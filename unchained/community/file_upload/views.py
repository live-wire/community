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
from .serializers import FileUploadSerializer
from .models import FileUpload
from rest_framework.exceptions import PermissionDenied
from community.permissions import isInstitutionAdmin, belongsToInstitution, getUserInstitution, getUserCourses
from community.permissions import canUpdateCourse, canRetrieveCourse
from community.mappings import generateKeys

class FileUploadViewSet(viewsets.ModelViewSet):
	"""
	This viewset automatically provides `list`, `create`, `retrieve`,
	`update` and `destroy` actions.

	Additionally we also provide an extra `highlight` action.
	"""
	queryset = FileUpload.objects.all()
	serializer_class = FileUploadSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
	authentication_classes = (CsrfExemptSessionAuthentication, )

	def list(self, request, *args, **kwargs):
		if not belongsToInstitution(request, getUserInstitution(request)):
			raise PermissionDenied(detail='User does not belong to the institution', code=None)
		if request.user.is_superuser:
			self.queryset = FileUpload.objects.all()
		else:
			self.queryset = FileUpload.objects.filter(institution=getUserInstitution(request), course__in=getUserCourses(request).all())
		response = super(FileUploadViewSet, self).list(request, *args, **kwargs)
		response = generateKeys(response, self.serializer_class)
		return response

	def create(self, request, *args, **kwargs):
		if not canUpdateCourse(request, self.get_object().institution, self.get_object().course):
			raise PermissionDenied(detail='User is not an owner of the course', code=None)
		return super(FileUploadViewSet, self).create(request, *args, **kwargs)

	def retrieve(self, request, *args, **kwargs):
		if not canRetrieveCourse(request, self.get_object().institution, self.get_object().course):
			raise PermissionDenied(detail='User does not belong to the course', code=None)
		return super(FileUploadViewSet, self).retrieve(request, *args, **kwargs)

	def update(self, request, *args, **kwargs):
		if not canUpdateCourse(request, self.get_object().institution, self.get_object().course):
			raise PermissionDenied(detail='User is not an owner of the course', code=None)
		return super(FileUploadViewSet, self).update(request, *args, **kwargs)

	def destroy(self, request, *args, **kwargs):
		if not canUpdateCourse(request, self.get_object().institution, self.get_object().course):
			raise PermissionDenied(detail='User is not an owner of the course', code=None)
		return super(FileUploadViewSet, self).destroy(request, *args, **kwargs)
