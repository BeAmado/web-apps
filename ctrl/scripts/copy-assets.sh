#!/bin/sh

if [ ! -d mini/assets ]
then
    mkdir -p mini/assets
fi
cp raw/assets/* mini/assets