package main

import "github.com/go-martini/martini"

func main() {
	m := martini.Classic()
	m.Get("/hi", func() string {
		return "Hello, World!"
	})
	m.Run()
}
