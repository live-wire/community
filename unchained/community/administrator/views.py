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
from .serializers import AdministratorSerializer, AdministratorListSerializer
from .models import Administrator
from community.permissions import belongsToInstitution, isInstitutionAdmin, getUserInstitution
from rest_framework.exceptions import PermissionDenied
from community.filters import applyUserFilters
from community.mappings import generateKeys

class AdministratorViewSet(viewsets.ModelViewSet):
	"""
	This viewset automatically provides `list`, `create`, `retrieve`,
	`update` and `destroy` actions.

	Additionally we also provide an extra `highlight` action.
	"""
	queryset = Administrator.objects.all()
	serializer_class = AdministratorSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
	authentication_classes = (CsrfExemptSessionAuthentication, )

	def list(self, request, *args, **kwargs):
		self.serializer_class = AdministratorListSerializer
		if not isInstitutionAdmin(request, getUserInstitution(request)):
			raise PermissionDenied(detail='User is not an admin_user', code=None)
		if request.user.is_superuser:
			self.queryset = applyUserFilters(request, Administrator)
		else:
			self.queryset = applyUserFilters(request, Administrator, institution=getUserInstitution(request))
		response = super(AdministratorViewSet, self).list(request, *args, **kwargs)
		response = generateKeys(response, self.serializer_class)
		return response

	def create(self, request, *args, **kwargs):
		if not isInstitutionAdmin(request, getUserInstitution(request)):
			raise PermissionDenied(detail='User is not an admin_user', code=None)
		return super(AdministratorViewSet, self).create(request, *args, **kwargs)

	def retrieve(self, request, *args, **kwargs):
		if not isInstitutionAdmin(request, self.get_object().institution):
			raise PermissionDenied(detail='User is not an admin_user', code=None)
		return super(AdministratorViewSet, self).retrieve(request, *args, **kwargs)

	def update(self, request, *args, **kwargs):
		if not isInstitutionAdmin(request, self.get_object().institution):
			raise PermissionDenied(detail='User is not an admin_user', code=None)
		return super(AdministratorViewSet, self).update(request, *args, **kwargs)

	def destroy(self, request, *args, **kwargs):
		if not isInstitutionAdmin(request, self.get_object().institution):
			raise PermissionDenied(detail='User is not an admin_user', code=None)
		if request.user.id == self.get_object().user.id:
			raise PermissionDenied(detail='Admin cannot delete oneself', code=None)
		return super(AdministratorViewSet, self).destroy(request, *args, **kwargs)


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

