from urllib.request import urlopen
from multiprocessing.dummy import Pool as ThreadPool
import time
import argparse
import inspect

parser = argparse.ArgumentParser()
parser.add_argument('--threads', help='Run this in a pool of how many threads')
args = parser.parse_args()

def timing(f):
    def wrap(*args):
        time1 = time.time()
        ret = f(*args)
        time2 = time.time()
        print('{:s} function took {:.3f} s'.format(f.__name__, (time2-time1)))
        return ret
    return wrap

@timing
def main(threads=1):
	urls = [
	'http://www.python.org', 
	'http://www.python.org/about/',
	'http://www.onlamp.com/pub/a/python/2003/04/17/metaclasses.html',
	'http://www.python.org/doc/',
	'http://www.python.org/download/',
	'http://www.python.org/getit/',
	'http://www.python.org/community/',
	'https://wiki.python.org/moin/',
	'http://www.python.org', 
	'http://www.python.org/about/',
	'http://www.onlamp.com/pub/a/python/2003/04/17/metaclasses.html',
	'http://www.python.org/doc/',
	'http://www.python.org/download/',
	'http://www.python.org/getit/',
	'http://www.python.org/community/',
	'https://wiki.python.org/moin/',
	]

	# make the Pool of workers
	pool = ThreadPool(threads)

	# open the urls in their own threads
	# and return the results
	results = pool.map(urlopen, urls)

	# close the pool and wait for the work to finish 
	pool.close() 
	pool.join()
	# print(list(map(lambda a: a.status, results)))



if __name__ == '__main__':
	if args.threads:
		main(int(args.threads))
	else:
		main(4)
