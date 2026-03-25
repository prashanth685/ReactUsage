import sys
from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QTableWidget, QTableWidgetItem, QComboBox
from PyQt5.QtGui import QFont, QColor
from PyQt5.QtCore import Qt

class BeautifulTable(QWidget):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("Beautiful Table with Dropdown - PyQt5")
        self.setGeometry(300, 200, 700, 400)

        layout = QVBoxLayout()

        # Create table
        self.table = QTableWidget()
        self.table.setRowCount(5)
        self.table.setColumnCount(4)  # Added a column for Gender

        # Headers
        headers = ["Name", "Age", "Country", "Gender"]
        self.table.setHorizontalHeaderLabels(headers)

        # Styling
        self.table.setAlternatingRowColors(True)
        self.table.setStyleSheet("""
            QTableWidget {
                background-color: #f5f5f5;
                alternate-background-color: #e8f0fe;
                gridline-color: #c0c0c0;
                font-size: 14px;
            }
            QHeaderView::section {
                background-color: #4CAF50;
                color: white;
                font-weight: bold;
                padding: 6px;
                border: none;
            }
        """)

        # Data
        data = [
            ("Alice", "24", "USA", "Female"),
            ("Bob", "30", "UK", "Male"),
            ("Charlie", "28", "Canada", "Male"),
            ("David", "35", "Australia", "Male"),
            ("Eva", "22", "Germany", "Female"),
        ]

        genders = ["Male", "Female", "Other"]

        # Fill table
        for row, (name, age, country, gender) in enumerate(data):
            for col, value in enumerate([name, age, country]):
                item = QTableWidgetItem(value)
                item.setTextAlignment(Qt.AlignCenter)
                item.setFont(QFont("Arial", 11))
                if col == 0:
                    item.setForeground(QColor("#2c3e50"))
                self.table.setItem(row, col, item)

            # Add dropdown for Gender
            combo = QComboBox()
            combo.addItems(genders)
            combo.setCurrentText(gender)
            combo.setFont(QFont("Arial", 11))
            self.table.setCellWidget(row, 3, combo)

        layout.addWidget(self.table)
        self.setLayout(layout)

# Run app
if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = BeautifulTable()
    window.show()
    sys.exit(app.exec_())