from django.db.models import Q

def applyUserFilters(request, modelclass, *args, **kwargs):
		search = request.query_params.get('search', '')
		condition = Q(user__first_name__icontains=search)
		condition |= Q(user__last_name__icontains=search)
		condition |= Q(user__username__icontains=search)
		condition |= Q(user__email__icontains=search)
		condition |= Q(uid__icontains=search)
		return modelclass.objects.filter(condition, *args, **kwargs).order_by('id')