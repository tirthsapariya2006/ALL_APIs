const db = require("../config/db"); 

exports.addtodo = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  db.run('INSERT INTO todos (title) VALUES (?)', [title], function(err) {
    if (err) return res.status(500).json({ error: err.message});
    res.status(201).json({ id: this.lastID, title, completed: 0 });
  });
}

exports.alltodo = (req, res) => {
  db.all('SELECT * FROM todos', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
}

exports.findtodo = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM todos WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Todo not found' });
    res.json(row);
  });
}

exports.updatetodo = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  db.run(
    'UPDATE todos SET title = ?, completed = ? WHERE id = ?',
    [title, completed ? 1 : 0, id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: 'Todo not found' });
      res.json({ id, title, completed });
    }
  );
}

exports.deletetodo = (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM todos WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Todo not found' });
    res.json({ message: 'Todo deleted' });
  });
}