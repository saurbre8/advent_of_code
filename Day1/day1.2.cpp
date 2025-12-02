#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::ifstream infile("day1input.txt");
    std::string line;
    int dial_position = 50;
    int zero_count = 0;
    while (std::getline(infile, line)) {
      char direction = line[0];
      int value = std::stoi(line.substr(1));
      std::cout << "Direction: " << direction << ", Value: " << value << std::endl;
      for (int i = 0; i < value; ++i) {
        if (direction == 'R') {
            dial_position = (dial_position + 1) % 100;
        } else if (direction == 'L') {
            dial_position = (dial_position - 1 + 100) % 100;
        }
        if (dial_position == 0) {
            zero_count++;
        }
      }
    }
    std::cout << zero_count << std::endl;
    infile.close();
}
