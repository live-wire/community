from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from course import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'course', views.CourseViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    url(r'^', include(router.urls))
]