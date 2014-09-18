Bible API
=========

A basic go-martini server

##Up and Running

###Golang server

####Install

Install martini

```
go get github.com/go-martini/martini
```

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

Ping [localhost:3000](http://localhost:3000) for the server

###Ember front-end helper app

####Install

Install npm + bower dependencies

```
npm install
bower install
```

Run the live-reload dev app via gulp:

```
gulp
```

Visit [localhost:4000](http://localhost:4000)


##Vision

An API for any dev that wants simple Bible access,
with an Ember app on top to help test out and save a daily read and some favorites.
