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
from .serializers import CourseSerializer, CourseListSerializer
from .models import Course
from community.permissions import belongsToInstitution, isInstitutionAdmin, canUpdateCourse, canRetrieveCourse, getUserInstitution
from rest_framework.exceptions import PermissionDenied
from community.mappings import generateKeys

class CourseViewSet(viewsets.ModelViewSet):
	"""
	This viewset automatically provides `list`, `create`, `retrieve`,
	`update` and `destroy` actions.

	Additionally we also provide an extra `highlight` action.
	"""
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
	authentication_classes = (CsrfExemptSessionAuthentication, )

	# def list(self, request, *args, **kwargs):
		# print('list institutions', request.user)
		# queryset = Institution.objects.all()
		# serializer_context = {
		#	 'request': Request(request._request),
		# }
		# serializer = InstitutionSerializer(queryset, many=True, context=serializer_context)
		# return super().list(self, request, *args, **kwargs)
		# return Response(serializer.data)
	# def list(self, request, *args, **kwargs):
	#	 if not belongsToInstitution(request, self.get_object().institution):
	#		 raise PermissionDenied(detail='User does not belong to the institution', code=None)
	#	 queryset = Course.objects.filter(institution=self.get_object().institution)
	#	 serializer_context = {
	#		 'request': Request(request._request),
	#	 }
	#	 serializer = CourseSerializer(queryset, many=True, context=serializer_context)
	#	 return Response(serializer.data)
		# return super().list(self, request, *args, **kwargs)

	def list(self, request, *args, **kwargs):
		if not belongsToInstitution(request, getUserInstitution(request)):
			raise PermissionDenied(detail='User does not belong to the institution', code=None)
		self.serializer_class = CourseListSerializer
		if request.user.is_superuser:
			self.queryset = Course.objects.all()
		else:
			self.queryset = Course.objects.filter(institution=getUserInstitution(request))
		response = super(CourseViewSet, self).list(request, *args, **kwargs)
		response = generateKeys(response, self.serializer_class)
		return response

	def create(self, request, *args, **kwargs):
		if not isInstitutionAdmin(request, getUserInstitution(request)):
			raise PermissionDenied(detail='User is not an admin_user', code=None)
		return super(CourseViewSet, self).create(request, *args, **kwargs)

	def retrieve(self, request, *args, **kwargs):
		if not canRetrieveCourse(request, self.get_object().institution, self.get_object()):
			raise PermissionDenied(detail='User does not belong to the course', code=None)
		return super(CourseViewSet, self).retrieve(request, *args, **kwargs)

	def update(self, request, *args, **kwargs):
		if not canUpdateCourse(request, self.get_object().institution, self.get_object()):
			raise PermissionDenied(detail='User is not a teacher of this course', code=None)
		return super(CourseViewSet, self).update(request, *args, **kwargs)

	def destroy(self, request, *args, **kwargs):
		if not isInstitutionAdmin(request, self.get_object().institution):
			raise PermissionDenied(detail='User is not an admin_user', code=None)
		return super(CourseViewSet, self).destroy(request, *args, **kwargs)


	# def get_permissions(self):
	#	 """
	#	 Instantiates and returns the list of permissions that this view requires.
	#	 """
	#	 from rest_framework.permissions import IsAuthenticated, IsAdminUser
	#	 if self.action =='retrieve' or self.action == 'update':
	#		 permission_classes = [IsAuthenticated]
	#	 else:
	#		 permission_classes = [IsAdminUser]
	#	 return [permission() for permission in permission_classes]

