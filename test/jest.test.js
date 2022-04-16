test('Devo conhecer as principais assertivas do jest', () => {
    let number = null;
    expect(number).toBeNull();
});

test('Devo trabalhar com objetos', () => {
    const obj = {name: 'Silvio', email: 'teste@test.com.br'};
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Silvio');
    expect(obj.name).toBe('Silvio');
});