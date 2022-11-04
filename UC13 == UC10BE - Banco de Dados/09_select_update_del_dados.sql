SELECT * FROM Usuarios
SELECT * FROM Classes
SELECT * FROM Personagens
SELECT * FROM Habilidades
SELECT * FROM ClasseHabilidade

SELECT P.PersonagemID, P.Nome, C.ClasseID, C.Nome AS ClasseNome, C.Descricao AS ClasseDescricao FROM Personagens P INNER JOIN Classes C ON P.PersonagemID = C.ClasseID

UPDATE Usuarios SET Senha = HASHBYTES('SHA2_512','654321') WHERE UsuarioID = 1

DELETE FROM ClasseHabilidade