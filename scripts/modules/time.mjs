var
    tdy = new Date(),
    Y = tdy.getFullYear(),
    M = tdy.getMonth() + 1,
    d = tdy.getDate(),
    D = M + '-' + d,
    h = tdy.getHours(),
    m = tdy.getMinutes(),
    t = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0'),
    D_h = D, h,
    D_t = D, t;
export { tdy, Y, M, d, D, h, m, t, D_h, D_t };