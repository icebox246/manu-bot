.PHONY(default)
default: bin/elim_gauss/ega

bin/elim_gauss/ega: bin/elim_gauss/ega.cpp
	cd bin/elim_gauss
	g++ -o $@ $^
