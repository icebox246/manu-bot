#include <bits/stdc++.h>

using namespace std;

void divide_row(double row[], double a, size_t size) {
	for(int i = 0; i < size; i++) {
		row[i] /= a;
	}
}

void submul_row(double a[], double b[], double mul, size_t size) {
	for(int i = 0; i < size; i++) {
		a[i] -= b[i] * mul;
	}
}

int main() {
	size_t n_rows;
	cin >> n_rows;
	double rows[n_rows][n_rows+1];
	for (int y = 0; y < n_rows; y++) {
		for(int x = 0; x < n_rows +1;x++) {
			cin >> rows[y][x];
		}
	}

	for(int col = 0; col < n_rows; col++) {
		divide_row(rows[col],rows[col][col],n_rows + 1);	
		for(int y = 0; y < n_rows; y++) {
			if(y == col) continue;
			submul_row(rows[y],rows[col],rows[y][col],n_rows + 1);
		}
	}

	// Kiedy zwraca "inf" lub "nan" to uklad nie ma jednego rozwiazania

	for (int i = 0; i < n_rows; i++) {
		cout << rows[i][n_rows] << " ";
	}
	cout << endl;
}
