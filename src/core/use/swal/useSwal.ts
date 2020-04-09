import Swal, { SweetAlertOptions } from 'sweetalert2'

export const useToasty = (options: SweetAlertOptions) => {   
    return Swal.fire(options)
}