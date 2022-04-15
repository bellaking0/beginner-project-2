let data = [
    {
      name: 'Beau',
      age: '12'
    },
    {
      name: 'Gizmo',
      age: '6'
    },
    {
      name: 'Ladybird',
      age: '15'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
  });
  
  info.innerHTML = details.join('\n');