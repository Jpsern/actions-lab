#!/bin/bash

cd /usr/share/zoneinfo/
for TIMEZONE in $(find . -type f); do
    export TZ=$(echo ${TIMEZONE} | sed -e 's|./||')
    echo ${TZ} $(date +%z)
done
