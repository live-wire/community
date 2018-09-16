from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Institution

# class SnippetSerializer(serializers.ModelSerializer):
#	 owner = serializers.ReadOnlyField(source='owner.username')
#	 class Meta:
#		 model = Snippet
#		 fields = ('owner', 'id', 'title', 'code', 'linenos', 'language', 'style')



# class UserSerializer(serializers.ModelSerializer):
#	 snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())
#	 class Meta:
#		 model = User
#		 fields = ('id', 'username', 'snippets')

class InstitutionListSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Institution
		fields = ('id', 'url', 'title')


class InstitutionSerializer(serializers.HyperlinkedModelSerializer):
	# courses = serializers.HyperlinkedRelatedField(many=True, view_name='course-detail', read_only=True)
	# students = serializers.HyperlinkedRelatedField(many=True, view_name='student-detail', read_only=True)
	# teachers = serializers.HyperlinkedRelatedField(many=True, view_name='teacher-detail', read_only=True)
	# admin_users = serializers.HyperlinkedRelatedField(many=True, view_name='admin_user-detail', read_only=True)
	class Meta:
		model = Institution
		fields = ('id', 'detail', 'url', 'owner', 'title', 'courses', 'students', 'teachers', 'administrators')

class UserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = User
		fields = ('url', 'id', 'username')