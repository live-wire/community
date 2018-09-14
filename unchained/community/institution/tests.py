from django.test import TestCase

# Create your tests here.
from .models import Institution

class InstitutionTestCase(TestCase):
    def setUp(self):
        Institution.objects.create(title="TestInstitution", detail="Testing 1 2 3")

    def test_institution_object_string(self):
        """Institution object to string should contain title"""
        t = Institution.objects.get(title="TestInstitution")
        self.assertEqual(str(t), 'TestInstitution')
