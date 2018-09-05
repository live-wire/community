from rest_framework import serializers
from django.contrib.auth.models import User
from .models import AdminUser


class AdminUserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = AdminUser
		fields = ('id', 'url', 'user', 'institution')
