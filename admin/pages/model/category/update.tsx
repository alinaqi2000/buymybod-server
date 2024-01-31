import Head from 'next/head';
import { PureComponent } from 'react';
import Page from '@components/common/layout/page';
import Link from 'next/link';
import {
  Form, Input, Button, Breadcrumb, message, InputNumber
} from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { performerCategoryService } from '@services/perfomer-category.service';
import Loader from '@components/common/base/loader';

interface IFormValue {
  name: string;
  slug: string;
  ordering: number;
  description: string;
}
class CategoryUpdate extends PureComponent<any> {
  state = {
    submiting: false,
    // fetching: true,
    category: null
  };

  static async getInitialProps({ ctx }) {
    return ctx.query;
  }

  async componentDidMount() {
    const { id } = this.props;
    try {
      const resp = await performerCategoryService.findById(id);
      this.setState({ category: resp.data });
    } catch (e) {
      message.error('Category not found!');
    } finally {
      this.setState({ });
    }
  }

  async submit(data: any) {
    const { id } = this.props;
    try {
      this.setState({ submiting: true });

      const submitData = {
        ...data
      };
      await performerCategoryService.update(id, submitData);
      message.success('Updated successfully');
      this.setState({ submiting: false });
    } catch (e) {
      // TODO - check and show error here
      const err = (await Promise.resolve(e)) || {};
      message.error(err.message || 'An error occurred, please try again!');
      this.setState({ submiting: false });
    }
  }

  render() {
    const { category, submiting } = this.state;
    return (
      <>
        <Head>
          <title>Update category</title>
        </Head>
        <div style={{ marginBottom: '16px' }}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="/model/category" as="/model/category">
                <a>Categories</a>
              </Link>
              {/* <span>Categories</span> */}
            </Breadcrumb.Item>
            {category && <Breadcrumb.Item>{category.name}</Breadcrumb.Item>}
            <Breadcrumb.Item>Update</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Page>
          {!category ? (
            <Loader />
          ) : (
            <Form
              onFinish={this.submit.bind(this)}
              initialValues={category as IFormValue}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input name!' }]}
                label="Name"
              >
                <Input placeholder="Enter category name" />
              </Form.Item>

              <Form.Item name="slug" label="Slug">
                <Input placeholder="Custom friendly slug" />
              </Form.Item>

              <Form.Item name="ordering" label="Ordering">
                <InputNumber />
              </Form.Item>

              <Form.Item name="description" label="Description">
                <Input.TextArea rows={3} />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ float: 'right' }}
                loading={submiting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Page>
      </>
    );
  }
}

export default CategoryUpdate;
