import luigi
import os
import time
import re



class DownloadData(luigi.Task):
	def output(self):
		return luigi.LocalTarget("players.csv")

	def run(self):
		data = "id, name\n6, Pogba\n7, Ronaldo\n10, Messi\n6, Pogba"
		with self.output().open('w') as out_file:
			out_file.write(data)

class PlayerCounter(luigi.Task):
	def requires(self):
		return DownloadData()
	def output(self):
		return luigi.LocalTarget("count.csv")
	def run(self):
		with self.input().open('r') as in_file, self.output().open('w') as out_file:
			text = in_file.readlines()
			temp = {}
			text = text[1:]
			for line in text:
				matchObj = re.match( r'(.*,)(.*)', line, re.M|re.I)
				key = matchObj.group(2).strip()
				if matchObj:
					if key in temp:
						temp[key] = temp[key] + 1
					else:
						temp[key] = 1
			text = str(temp)
			out_file.write(text)

if __name__ == '__main__':
	luigi.run()
