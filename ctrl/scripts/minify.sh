#!/bin/sh

if [ ! -d mini ]
    mkdir mini
fi

if [ ! -d to-minify ]
    mkdir to-minify
fi

rm -r to-minify/*

for fld in \
    pages \
    css \
    js
do
    mkdir -p to-minify/$fld
    for fname in $(cat raw/$fld/to-minify.txt)
    do
        cp raw/$fld/$fname to-minify/$fld/$fname
    done
done

npx webpack
npm run minify-css

if [ ! -d mini/assets ]
then
    mkdir -p mini/assets
fi
cp raw/assets/* mini/assets

