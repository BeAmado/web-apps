#!/bin/sh

if [ ! -d to-minify ]
then
    mkdir to-minify
fi

rm -r to-minify/*

for ftype in \
    pages \
    css \
    js
do
    mkdir -p to-minify/$ftype
    for fname in $(cat raw/$ftype/to-minify.txt)
    do
        cp "raw/$ftype/$fname.$(echo $ftype | sed s/pages/html/)" \
            "to-minify/$ftype/$fname.$(echo $ftype | sed s/pages/html/)"
    done
done
