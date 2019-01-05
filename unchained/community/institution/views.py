from django.shortcuts import render
from rest_framework import generics
from rest_framework import mixins
from django.contrib.auth.models import User
from rest_framework import permissions

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.reverse import reverse
from rest_framework import renderers
from rest_framework import viewsets
# Create your views here.

from rest_framework.decorators import action
from community.csrfsession import CsrfExemptSessionAuthentication
from .serializers import InstitutionSerializer, UserSerializer
from .models import Institution
from rest_framework.exceptions import PermissionDenied
from community.permissions import isInstitutionAdmin, getUserInstitution, belongsToInstitution, canUpdateProfile
from community.filters import applyUserFilters, applyInstitutionFilters
from community.mappings import generateKeys
from django.db.models import Q

class InstitutionViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Institution.objects.all()
    serializer_class = InstitutionSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    authentication_classes = (CsrfExemptSessionAuthentication, )

    def list(self, request, *args, **kwargs):
        if request.user.is_superuser:
            self.queryset = applyInstitutionFilters(request, Institution, *args, **kwargs)
        response = super(InstitutionViewSet, self).list(request, *args, **kwargs)
        response = generateKeys(response, self.serializer_class)
        return response

    def retrieve(self, request, *args, **kwargs):
        if not belongsToInstitution(request, self.get_object()):
            raise PermissionDenied(detail='User does not belong to the institution', code=None)
        return super(InstitutionViewSet, self).retrieve(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        if not isInstitutionAdmin(request, self.get_object()):
            raise PermissionDenied(detail='User is not an admin_user', code=None)
        return super(InstitutionViewSet, self).retrieve(request, *args, **kwargs)


    def get_permissions(self):
        """
        Instantiates and returns the list of permissions that this view requires.
        """
        from rest_framework.permissions import IsAuthenticated, IsAdminUser
        if self.action =='retrieve' or self.action == 'update':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

@api_view(['GET'])
def api_root(request, format=None):
    authentication_classes = []
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'institutions': reverse('institution-list', request=request, format=format)
    })