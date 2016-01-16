S3_BUCKET=s3://www.damonkalaboukis.com/

all:
	aws s3 sync . $(S3_BUCKET) --exclude '.git/*' --exclude 'Makefile' --acl public-read --delete
