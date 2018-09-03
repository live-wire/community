from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from institution.views import InstitutionViewSet, UserViewSet
from course.views import CourseViewSet
from announcement.views import AnnouncementViewSet

from rest_framework.schemas import get_schema_view

schema_view = get_schema_view(title='Pastebin API')



# # Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'institution', InstitutionViewSet)
router.register(r'users', UserViewSet)

# The API URLs are now determined automatically by the router.

urlpatterns = [
	url(r'^', include(router.urls)),
	url(r'^schema/$', schema_view)
]