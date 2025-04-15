import React, { useState } from 'react';
import { PlusCircle, CheckCircle2, XCircle, Trash2 } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim(), completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
              My Tasks
            </h1>

            <form onSubmit={addTodo} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="Add a new task..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  <PlusCircle className="w-5 h-5" />
                </button>
              </div>
            </form>

            <div className="space-y-3">
              {todos.map(todo => (
                <div
                  key={todo.id}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    todo.completed ? 'bg-gray-50' : 'bg-white'
                  } border border-gray-200 shadow-sm transition-all duration-200`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className="focus:outline-none"
                    >
                      {todo.completed ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      ) : (
                        <XCircle className="w-6 h-6 text-gray-400" />
                      )}
                    </button>
                    <span
                      className={`flex-1 text-gray-800 ${
                        todo.completed ? 'line-through text-gray-500' : ''
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="ml-2 text-gray-400 hover:text-red-500 focus:outline-none transition-colors duration-200"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              {todos.length === 0 && (
                <div className="text-center py-6 text-gray-500">
                  No tasks yet. Add one above!
                </div>
              )}
            </div>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              {todos.length} task{todos.length !== 1 ? 's' : ''} total • {todos.filter(t => t.completed).length} completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;