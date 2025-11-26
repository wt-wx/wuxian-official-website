import { createClient } from '@supabase/supabase-js'

// 环境变量
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 初始化 Supabase 客户端
// 如果没有配置环境变量，supabase 将为 null，进入 Mock 模式
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

export interface InquiryForm {
    name: string
    mobile: string
    email?: string
    company: string
    type: string
    message: string
}

/**
 * 提交商务咨询
 * @param formData 表单数据
 * @returns { success: boolean, message: string }
 */
export const submitInquiry = async (formData: InquiryForm) => {
    // 1. Mock 模式 (当未配置 Supabase 时)
    if (!supabase) {
        console.log('[Mock Mode] Submitting inquiry:', formData)
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 1000))
        return { success: true, message: '提交成功 (模拟模式)' }
    }

    // 2. 真实提交模式
    try {
        const { error } = await supabase
            .from('inquiries')
            .insert([
                {
                    name: formData.name,
                    mobile: formData.mobile,
                    email: formData.email,
                    company: formData.company,
                    inquiry_type: formData.type,
                    message: formData.message,
                    created_at: new Date().toISOString(),
                    status: 'pending' // 默认状态
                }
            ])

        if (error) throw error

        return { success: true, message: '提交成功' }
    } catch (error: any) {
        console.error('Supabase submission error:', error)
        return { success: false, message: error.message || '提交失败，请稍后重试' }
    }
}
