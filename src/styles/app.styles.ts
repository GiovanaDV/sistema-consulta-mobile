import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { //layout principal com fundo roxo
    flex: 1,
    backgroundColor: "#79059C",
  },
  scrollContent: { //padding da area de scroll
    padding: 20,
    paddingTop: 40,
  },
  header: { // cabecalho centralizado
    alignItems: "center",
    marginBottom: 24,
  },
  titulo: { //estilo de texto do cabecalho
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subtitulo: { //estilo de texto do cabecalho
    fontSize: 18,
    color: "#fff",
    opacity: 0.9,
  },
})