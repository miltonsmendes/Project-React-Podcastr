export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        // percorrer o array e adiciona '0' para cada unidade com menos de 2 casas decimais
        .join(':')
    //adiciona ':' entre as unidades

    return timeString;
}