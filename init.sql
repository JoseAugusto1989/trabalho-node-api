CREATE TABLE IF NOT EXISTS match (
  	id int primary key,
	team_home varchar(20) not null,
	team_visitor varchar(20) not null,
	score_home int not null,
	score_visitor int not null,
	match_date date not null
);

INSERT INTO match (id, team_home, team_visitor, score_home, score_visitor, match_date) values (1, 'Brasil', 'Belgica', 2, 0, '2022-10-05');
INSERT INTO match (id, team_home, team_visitor, score_home, score_visitor, match_date) values (2, 'Japão', 'Uruguai', 0, 1, '2022-11-06');
INSERT INTO match (id, team_home, team_visitor, score_home, score_visitor, match_date) values (3, 'Portugal', 'Espanha', 2, 0, '2022-11-05');
INSERT INTO match (id, team_home, team_visitor, score_home, score_visitor, match_date) values (4, 'França', 'Suíça', 0, 0, '2022-11-10');
INSERT INTO match (id, team_home, team_visitor, score_home, score_visitor, match_date) values (5, 'Suíça', 'Brasil', 0, 0, '2022-11-15');