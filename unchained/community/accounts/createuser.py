from django.contrib.auth.models import User
import datetime
from institution.models import Institution
from student.models import Student
from teacher.models import Teacher
from administrator.models import Administrator
from course.models import Course
from django.db.models import Q

GEN = 30

def _createUser(name):
    now = datetime.datetime.now()
    t = now.isoformat()
    t = t[:t.index('T')]

    # Create user and save to the database
    user = User.objects.create_user(name, '%s@gmail.com'%name, '%spassword'%name)
    # Update fields and then save again
    user.first_name = name
    user.last_name = t
    user.save()
    return user

def createAccount(institutionName = 'VIT University',
                  modelClass = Student,
                  name = 'studentgen0'):
    institution = Institution.objects.filter(title__icontains=institutionName)[0]
    _createUser(name)
    user = User.objects.filter(Q(first_name = name))[0]
    if institution is not None:
        account = modelClass(institution=institution, user = user, uid = name)
        account.save()


def createMultipleStudents(institutionName = 'VIT University'):
    for i in range(1, GEN):
        name = 'studentgen%d'%i
        createAccount(institutionName = institutionName, name = name)

def createMultipleTeachers(institutionName = 'VIT University'):
    for i in range(1, GEN):
        name = 'teachergen%d'%i
        createAccount(institutionName = institutionName, modelClass = Teacher, name = name)


