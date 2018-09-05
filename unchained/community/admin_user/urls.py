from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from admin_user import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'admin_user', views.AdminUserViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    url(r'^', include(router.urls))
]
