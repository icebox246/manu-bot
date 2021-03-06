default: bin/elim_gauss/ega.exe

bin/elim_gauss/ega.exe: bin/elim_gauss/ega.cpp
	cd bin/elim_gauss
	g++ -o $@ $^
