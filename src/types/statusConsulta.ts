export type StatusConsulta = // Isso é um Union Type = define que status da consulta só pode assumir um desses valores, se tentar outro, gera erro 
    | "agendada"
    | "confirmada"
    | "cancelada"
    | "realizada";
