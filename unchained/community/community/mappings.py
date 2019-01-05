# Key Names to Display names mappings
# Make sure you add all the mappings to the MAPPINGS_ tuple below



ID_ = {"key": "id", "display": "Id"}
URL_ = {"key": "url", "display": "URL"}
USER_ = {"key": "user", "display": "User"}
DEPARTMENT_ = {"key": "department", "display": "Department"}
INSTITUTION_ = {"key": "institution", "display": "Institution"}
UID_ = {"key": "uid", "display": "UID"}
FIRST_NAME_ = {"key": "first_name", "display": "First Name"}
LAST_NAME_ = {"key": "last_name", "display": "Last Name"}
EMAIL_ = {"key": "email", "display": "Email"}
COURSES_ = {"key": "courses", "display": "Courses"}
DETAIL_ = {"key": "detail", "display": "Detail"}
TITLE_ = {"key": "title", "display": "Title"}
OWNER_ = {"key": "owner", "display": "Owner"}
STUDENTS_ = {"key": "students", "display": "Students"}
TEACHERS_ = {"key": "teachers", "display": "Teachers"}
ADMINISTRATORS_ = {"key": "administrators", "display": "Administrators"}
CODE_ = {"key": "code", "display": "Course Code"}
COURSE_ = {"key": "course", "display": "Course"}
FILE_ = {"key": "file", "display": "File"}
DESCRIPTION_ = {"key": "description", "display": "Description"}


_MAPPINGS = ( ID_, URL_, USER_, DEPARTMENT_, INSTITUTION_, UID_, FIRST_NAME_, LAST_NAME_, 
             EMAIL_, COURSES_, DETAIL_, TITLE_, OWNER_, STUDENTS_, TEACHERS_, ADMINISTRATORS_,
             CODE_ )
_FIELD = 'keys'

def _getKeyForField(field):
    for item in _MAPPINGS:
        if item['key'] is field:
            return item
    return None


def generateKeys(response, serializerClass):
    """ Appends the response.data[_FIELD] with the corresponding keys 
    in serializerClass.Meta.fields
    """
    keys = []
    fields = serializerClass.Meta.fields
    for item in fields:
        keyFound = _getKeyForField(item)
        if keyFound is not None:
            keys.append(keyFound)
    response.data[_FIELD] = keys
    return response
