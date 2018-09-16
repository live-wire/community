from rest_framework import serializers
from django.contrib.auth.models import User
from teacher.models import Teacher
from student.models import Student
from .models import Course

# from rest_framework_nested.relations import NestedHyperlinkedRelatedField

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


# class CustomNestedNameserverSerializer(NestedHyperlinkedModelSerializer):
#	 def build_url_field(self, field_name, model_class):
#		 field_class, field_kwargs = super().build_url_field(
#			 field_name, model_class)
#		 if hasattr(self, 'url_view_name'):
#			 field_kwargs['view_name'] = self.url_view_name
#		 return field_class, field_kwargs

class CourseListSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Course
		fields = ('title', 'id', 'url', 'code', 'institution')
		read_only_fields = ('institution', )

class CourseSerializer(serializers.HyperlinkedModelSerializer):
	# announcements = serializers.HyperlinkedRelatedField(many=True, view_name='announcement-detail', read_only=True)
	class Meta:
		model = Course
		fields = ('title', 'id', 'url', 'code', 'institution', 'announcements', 'file_uploads',
				'student_set', 'teacher_set', 'image', 'cover_image')
		read_only_fields = ('institution', )
