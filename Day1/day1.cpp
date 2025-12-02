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
      int value = std::stoi(line.substr(1)) % 100;
      std::cout << "Direction: " << direction << ", Value: " << value << std::endl;
      if (direction == 'R') {
        dial_position += value;
      } else if (direction == 'L') {
        dial_position -= value;
      }
      if (dial_position < 0) {
        dial_position += 100;
      } else if (dial_position >= 100) {
        dial_position -= 100;
      }
      if (dial_position == 0) {
        zero_count++;
      }
    }
    std::cout << zero_count << std::endl;
    infile.close();
}
