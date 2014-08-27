countohol
=========

A basic go-martini server

###Up and Running

####Live-reload

If you want live-reload (duh),
install either [gin](https://github.com/codegangsta/gin) or [fresh](https://github.com/pilu/fresh):

```
go get github.com/codegangsta/gin
go get github.com/pilu/fresh
```

If you have a proper golang install,
and `$GOPATH/bin` is in your `$PATH`,
running `gin` or `fresh` will get you going,
complete with server restarts on file-change.

####Manual

Otherwise, from the projects root:

```
go get
go run server.go
```

Ping localhost:3000 for the magic.
