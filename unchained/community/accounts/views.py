from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)
from rest_framework.response import Response
from community.permissions import *

class RequestObject(object):
    pass


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    requestObj = RequestObject()
    requestObj.user = user
    institution = getUserInstitution(requestObj)
    response = {
        'token': token.key,
        'institution': institution.id if institution else '*',
        'type': getUserType(requestObj)
    }
    return Response(response,
                    status=HTTP_200_OK)

@csrf_exempt
@api_view(["POST", "GET"])
@permission_classes((AllowAny,))
def logout(request):
    try:
        request.user.auth_token.delete()
        print("TOKEN DELETED for User")
    except Exception as e:
        print(e)
    return Response(response,
                    status=HTTP_200_OK)


@csrf_exempt
@api_view(["GET"])
def sample_api(request):
    data = {'sample_data': 123}
    return Response(data, status=HTTP_200_OK)