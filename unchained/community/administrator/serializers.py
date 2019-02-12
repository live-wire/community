from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Administrator


class AdministratorSerializer(serializers.HyperlinkedModelSerializer):
    first_name = serializers.ReadOnlyField(source='user.first_name')
    last_name = serializers.ReadOnlyField(source='user.last_name')
    email = serializers.ReadOnlyField(source='user.email')
    class Meta:
        model = Administrator
        fields = ('id', 'url', 'user', 'institution', 'uid', 'image', 'first_name', 'last_name', 'email')
        read_only_fields = ('institution', 'user')

class AdministratorListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Administrator
        fields = ('id', 'url', 'institution', 'uid', 'image', 'first_name', 'last_name', 'email')
        read_only_fields = ('institution', 'user')
