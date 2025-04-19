document.addEventListener('DOMContentLoaded', function () {
    const students = [
        { srNo: 1, studentName: 'John Doe', maths: '', science: '', history: '', geography: '' },
        { srNo: 2, studentName: 'Jane Smith', maths: '', science: '', history: '', geography: '' },
        { srNo: 3, studentName: 'Alice Johnson', maths: '', science: '', history: '', geography: '' }
    ];

    const tableBody = document.getElementById('studentTableBody');

    function renderTable() {
        tableBody.innerHTML = '';
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.srNo}</td>
                <td>${student.studentName}</td>
                <td><input type="text" class="form-control" value="${student.maths}" data-field="maths" data-index="${student.srNo - 1}"></td>
                <td><input type="text" class="form-control" value="${student.science}" data-field="science" data-index="${student.srNo - 1}"></td>
                <td><input type="text" class="form-control" value="${student.history}" data-field="history" data-index="${student.srNo - 1}"></td>
                <td><input type="text" class="form-control" value="${student.geography}" data-field="geography" data-index="${student.srNo - 1}"></td>
            `;
            tableBody.appendChild(row);
        });
    }

    function showToastMessage() {
        const toast = document.getElementById('toast');
        toast.style.display = 'block';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }

    function showErrorMessage() {
        const error = document.getElementById('error');
        error.style.display = 'block';
        setTimeout(() => {
            error.style.display = 'none';
        }, 3000);
    }

    document.getElementById('saveButton').addEventListener('click', () => {
        console.log('Saved data:', students);
        showToastMessage();
    });

    document.getElementById('resetButton').addEventListener('click', () => {
        students.forEach(student => {
            student.maths = '';
            student.science = '';
            student.history = '';
            student.geography = '';
        });
        renderTable();
    });

    tableBody.addEventListener('input', (event) => {
        const target = event.target;
        const field = target.getAttribute('data-field');
        const index = target.getAttribute('data-index');
        const value = target.value;

        if (isNaN(value) || value.trim() === '') {
            showErrorMessage();
            target.value = students[index][field]; // Reset to previous value
            return;
        }

        students[index][field] = value;
    });

    renderTable();
});