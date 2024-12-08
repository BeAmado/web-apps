#!/bin/sh

for htmlFile in $(ls mini/pages)
do
    sed -i 's/\(href="[^"]*\)\.css/\1.min.css/g' mini/pages/$htmlFile
done;