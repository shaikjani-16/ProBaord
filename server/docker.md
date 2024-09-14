-- docker run -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -d -p 5432:5432 -v inventory_database:/data/db postgres
1eff3a57a7724608f5853edc062aae8f36d5865311fcd58c2aa003bd76a3e936

-- docker exec -it 1eff3a57a772 /bin/bash
root@1eff3a57a772:/# ls
bin   data  docker-entrypoint-initdb.d  home  lib64  mnt  proc  run   srv  tmp  var
boot  dev   etc                         lib   media  opt  root  sbin  sys  usr
root@1eff3a57a772:/# ls -ltr
total 60
drwxr-xr-x   2 root root 4096 Jan 28  2024 home
drwxr-xr-x   2 root root 4096 Jan 28  2024 boot
drwxr-xr-x   1 root root 4096 Jun 12 00:00 var
drwxr-xr-x   1 root root 4096 Jun 12 00:00 usr
drwxrwxrwt   2 root root 4096 Jun 12 00:00 tmp
drwxr-xr-x   2 root root 4096 Jun 12 00:00 srv
lrwxrwxrwx   1 root root    8 Jun 12 00:00 sbin -> usr/sbin
drwxr-xr-x   2 root root 4096 Jun 12 00:00 opt
drwxr-xr-x   2 root root 4096 Jun 12 00:00 mnt
drwxr-xr-x   2 root root 4096 Jun 12 00:00 media
lrwxrwxrwx   1 root root    9 Jun 12 00:00 lib64 -> usr/lib64
lrwxrwxrwx   1 root root    7 Jun 12 00:00 lib -> usr/lib
lrwxrwxrwx   1 root root    7 Jun 12 00:00 bin -> usr/bin
drwx------   1 root root 4096 Jun 13 18:22 root
drwxr-xr-x   2 root root 4096 Jun 13 18:22 docker-entrypoint-initdb.d
drwxr-xr-x   1 root root 4096 Jun 13 18:22 run
drwxr-xr-x   1 root root 4096 Sep  8 16:52 etc
dr-xr-xr-x  11 root root    0 Sep  8 16:52 sys
dr-xr-xr-x 212 root root    0 Sep  8 16:52 proc
drwxr-xr-x   5 root root  340 Sep  8 16:52 dev
drwxr-xr-x   3 root root 4096 Sep  8 16:52 data
root@1eff3a57a772:/# cd data
root@1eff3a57a772:/data# ls
db
root@1eff3a57a772:/data# cd db
root@1eff3a57a772:/data/db#