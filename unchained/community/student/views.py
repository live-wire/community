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

